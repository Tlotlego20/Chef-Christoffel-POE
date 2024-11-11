# Chef-Christoffel-POE
POE

In the welcomeScreen i didnt change anything.In the HomeScreen i have changed the code There and there.
Ihave added MenuManagementScreen, MenuContext, MainsScreen, GuestPage, DessetsScreen.That the only improvements that i have done to the App.

This how the app is going to werk:
This app is a restaurant menu management system built with React Native, intended to serve two primary user types: staff and guests. It allows staff to manage menu items by adding, editing, or deleting dishes, while guests can browse the menu organized by different course categories (e.g., starters, mains, desserts).

Upon launching, the app’s Home Screen welcomes users with a background image, logo, and navigation options. Staff members can proceed to the Menu Overview and Menu Management sections, while guests can go to a Guest Page to explore menu options.

The Menu Overview Screen provides an analytical view for staff by calculating and displaying the average price of dishes within each course category. For instance, it groups all items under "starters," "mains," or "desserts" and computes the average price for each category, allowing staff to understand pricing trends at a glance.

The Menu Management Screen is a core feature for staff, offering a form where they can input new dishes into the menu. Staff can enter details like the dish’s name, course category, and price, then add it to the menu with a single click. This screen also displays a list of existing menu items, where each item is shown with its name, course, and price. Each item also has a “Remove” button that allows staff to delete it, making real-time menu updates easy and efficient.

The Guest Page is the starting point for guest users, presenting options to navigate to different course categories such as Starters, Mains, and Desserts. Once a guest selects a category, they are taken to a detailed course screen where they can view available items with their names and prices. This setup allows guests to easily explore the menu by filtering items by type.

The app’s functionality is made efficient by React Context API, which centralizes menu data and provides methods for adding and removing items across screens. The useMenu hook enables different screens to access and manipulate the menu data without needing redundant state management.

Overall, this app offers a streamlined, user-friendly experience for both staff and guests. Staff can quickly manage the menu and view pricing data, while guests can explore the menu in a well-organized manner. The navigation is powered by React Navigation, ensuring smooth transitions between screens, while the Context API keeps the menu data consistent and accessible across the app. This approach makes the app scalable, responsive, and efficient for restaurant operations.
