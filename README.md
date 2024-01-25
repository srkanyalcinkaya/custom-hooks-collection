# Custom React Hooks Collection

This repository features a collection of custom React hooks I've developed to enhance functionality and user experience in web applications. Each hook is designed for ease of use, efficiency, and reusability across different projects.

## Hooks

### `useTheme`
- **Description**: The `useTheme` hook facilitates theme management in your application. It supports `dark`, `light`, and `system` modes.
- **Parameters**:
  - `setTheme`: Function to set the theme.
  - `theme`: Current theme state.
  - `optionsTheme`: Options available for theme settings.
- **Usage**: Ideal for implementing theme customization, providing a seamless experience across different environments.

### `useConnection`
- **Description**: The `useConnection` hook monitors internet connectivity, providing real-time updates on the connection status.
- **Parameters**:
  - `status`: Current connection status.
  - `OfflineBanner`: A component displayed when offline.
  - `StatusComponent`: A component that displays the current connection status.
- **Usage**: Perfect for applications needing to inform users about internet connectivity and adapt to changes in connection status.

### `useCopyToClipboard`
- **Description**: `useCopyToClipboard` offers a straightforward way to copy text to the clipboard.
- **Parameters**:
  - `copied`: State indicating whether text has been copied.
  - `error`: Any error that occurs during the copy process.
  - `copyToClipboard`: Function to execute the copy operation.
- **Usage**: Useful for applications requiring a feature for users to easily copy content to their clipboard.

## Contributions

Feel free to contribute to this collection of custom hooks. Open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
