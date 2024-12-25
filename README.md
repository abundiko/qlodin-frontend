# Qlodin Frontend Web App

## Folder Structure

- `app`: containes the routes and pages
- - components related to just one page are in the same folder (route)

- `components`: contains all the components that are used in the app
- - no orphan components should be placed directly in the components folder, categoriize them in sub-folders
- - all components should be re-exported in the index.tsx file of their category folder

- `actions`: contains all the server actions that are used in the app

- `stores`: contains all the state management files that are used in the app

- `utils`: contains all the utilities that are used in the app

- `functions`: contains all the functions that are used in the app

- `types`: contains all the types that are used in the app

- `lib`: contains all the libraries that are used in the app

- `public`: contains all the public files that are used in the app

- `constants`: contains all the constants that are used in the app

## Routing

### Route Groups
- `(auth)`: contains all the routes that are related to authentication
- `(user)`: contains all the routes that are related to the user dashboard
- `(admin)`: contains all the routes that are related to the admin dashboard
- `(public)`: contains all the routes that are related to the public pages
- `(protected)`: contains all the routes that are related to the protected pages (must be logged in to view but not the dashboard)
