# ShoesStore - Mobile E-commerce App 👟

A modern mobile e-commerce application built with [Expo](https://expo.dev) for shopping shoes. This app provides a seamless shopping experience with features like product browsing, detailed product views, cart management, and secure checkout.

## Key Features

- Browse through an extensive collection of shoes
- Filter products by category, size, and price
- Detailed product views with high-quality images
- Shopping cart functionality
- User authentication and profile management
- Secure payment integration
- Order tracking

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project Structure

The app is organized using [file-based routing](https://docs.expo.dev/router/introduction) within the **app** directory:

- `/app/products` - Product listing and details
- `/app/cart` - Shopping cart management
- `/app/auth` - User authentication screens
- `/app/profile` - User profile and settings
- `/app/orders` - Order history and tracking

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Tech Stack

- Expo SDK
- React Native
- Redux for state management
- Expo Router for navigation
- Stripe for payments

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
