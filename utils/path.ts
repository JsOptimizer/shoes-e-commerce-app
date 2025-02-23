import { parse, Path } from "react-native-redash";

/**
 * Calculates the horizontal center point of an SVG path string
 *
 * @param currentPath - SVG path string to analyze
 * @returns The x-coordinate of the path's center point
 *
 * This function:
 * 1. Parses the SVG path string into curve commands
 * 2. Gets the start point from first curve and end point from last curve
 * 3. Calculates and returns the average x-coordinate as the center
 */
export const getPahCenter = (currentPath: string): number => {
  // Parse the path string into curve commands
  const curves = parse(currentPath).curves;

  if (!curves.length) {
    throw new Error("Invalid path: no curves found");
  }

  // Get start and end points
  const startPoint = curves[0].to;
  const endPoint = curves[curves.length - 1].to;

  // Calculate center x-coordinate
  const centerX = (startPoint.x + endPoint.x) / 2;

  return centerX;
};

/**
 * Finds the horizontal center point of a path at a specific index in an array of paths
 *
 * @param tabPaths - Array of Path objects to analyze
 * @param index - Index of the target path in the array
 * @returns The x-coordinate of the specified path's center point
 *
 * This function:
 * 1. Retrieves the path at the specified index
 * 2. Gets the start point from first curve and end point from last curve
 * 3. Calculates and returns the average x-coordinate as the center
 *
 * @throws {Error} If index is out of bounds or path has no curves
 */
export const getPathXCenterByIndex = (
  tabPaths: Path[],
  index: number
): number => {
  if (index < 0 || index >= tabPaths.length) {
    throw new Error("Index out of bounds");
  }

  const curves = tabPaths[index].curves;

  if (!curves.length) {
    throw new Error("Invalid path: no curves found");
  }

  // Get start and end points
  const startPoint = curves[0].to;
  const endPoint = curves[curves.length - 1].to;

  // Calculate center x-coordinate
  const centerX = (startPoint.x + endPoint.x) / 2;

  return centerX;
};
