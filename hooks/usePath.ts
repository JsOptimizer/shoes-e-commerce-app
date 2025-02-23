import { useMemo } from "react";
import { curveBasis, line } from "d3-shape";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "@/constants/screen";
import { parse } from "react-native-redash";

/**
 * Type definition for the path generation function
 * @param position - The horizontal position of the tab (0.5 to NUM_TABS - 0.5)
 * @param adjustedHeight - The height of the tab bar adjusted for safe area
 * @returns SVG path string for the tab shape
 */
type TGenerateTabShapePath = ({
  position,
  adjustedHeight,
}: {
  position: number;
  adjustedHeight: number;
}) => string;

// Configuration constants
const NUM_TABS = 5; // Number of tabs in the bottom bar
const SCALE = 0.7; // Scale factor for the tab curve dimensions
const TAB_BAR_HEIGH = 64; // Base height of the tab bar without safe area insets

/**
 * Generates an SVG path string for a curved tab shape
 * Uses D3's curve basis interpolation for smooth curves
 * Creates a symmetrical curve with raised center for the active tab indicator
 */
const generateTabShapePath: TGenerateTabShapePath = ({
  adjustedHeight,
  position,
}) => {
  const adjustedWidth = SCREEN_WIDTH / NUM_TABS;
  const tabX = adjustedWidth * position;

  // Create smooth curve using D3 line generator with basis interpolation
  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0], // Left edge
    [tabX - (65 + 35) * SCALE, 0], // Left curve start
    [tabX - (50 - 10) * SCALE, -6 * SCALE], // Left curve control point
    [tabX - (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE], // Left inner point
    [tabX + (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE], // Right inner point
    [tabX + (50 - 10) * SCALE, -6 * SCALE], // Right curve control point
    [tabX + (65 + 35) * SCALE, 0], // Right curve end
    [tabX + 100 * SCALE, 0], // Right edge
  ]);

  return `${tab}`;
};

/**
 * Custom hook for generating tab bar paths
 * Handles safe area insets and memoizes path calculations
 * @returns {Object} Container path, curved paths for each tab, and total height
 */
const usePath = () => {
  const insets = useSafeAreaInsets();
  const tHeight = TAB_BAR_HEIGH + insets.bottom; // Total height including bottom safe area
  const adjustedHeight = tHeight - insets.bottom; // Height without bottom safe area

  // Generate the container path for the entire tab bar
  const containerPath = useMemo(() => {
    return `M0,0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},${tHeight}L0,${tHeight}L0,0`;
  }, [tHeight]);

  // Generate individual curved paths for each tab
  const curvedPaths = useMemo(() => {
    return Array.from({ length: NUM_TABS }, (_, index) => {
      const tabShapePath = generateTabShapePath({
        position: index + 0.5, // Center the curve in each tab section
        adjustedHeight,
      });
      return parse(`${tabShapePath}`); // Parse SVG path string to Path object
    });
  }, [adjustedHeight]);

  return { containerPath, curvedPaths, tHeight };
};

export default usePath;
