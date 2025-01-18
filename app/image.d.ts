/**
 * Type declarations for various image formats
 * This file enables TypeScript to recognize imported image files
 * Supports PNG, JPEG, SVG and GIF formats by declaring them as modules
 * Each module exports a default value of type 'any'
 */

declare module "*.png" {
    const value:any;
    export default value;
}

declare module "*.jpeg" {
    const value:any;
    export default value;
}

declare module "*.svg" {
    const value:any;
    export default value;
} 
declare module "*.gif" {
    const value:any;
    export default value;
}