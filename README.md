# SpaceRobots
SpaceRobots is a React website created using Vite.
## Getting Started
These instructions will help you set up and run the SpaceRobots project on your local machine.
### Prerequisites
- Node.js 
- npm
### Installation
1. Clone the repository:
   `git clone`
3. Navigate to the project directory:
   `cd`
5. Install dependencies:
   `npm install`
## Running the Project
### Development Mode
To run the project in development mode: 
`npm run dev`

This will start the development server, and you can view the website at `http://localhost:5173` (or the port specified by Vite).
### Network Mode
To create an instance on your network, allowing you to connect with devices on the same network: 
`npm run host`

This will start the server and provide you with a network URL that you can use to access the website from other devices on your local network.
## Customizing Content
SpaceRobots uses JSON files to manage various text content. These files are located in the `utils/` folder:
- `collectionConstants.js`
- `eventsConstants.js`
- `heroConstants.js`
- `projectConstants.js`
- `roadmapConstants.js`
- `teamContants.js`
  
To modify the text content of the website, edit these files as needed. The changes will be reflected in the corresponding sections of the website.
### Example: Modifying the First Card in collectionConstants.js
To change the content of the first card in the collection, navigate to `utils/collectionConstants.js` and modify the `firstCard` object. Here's an example of the structure:
```javascript
export const cards = {
  firstCard: {
    title: "Space Robots",
    description: "By owning a Space Robots NFT, you're not just collecting a unique digital asset, but also investing in the future of space exploration.",
    modalDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab id et culpa quibusdam, exercitationem consequatur vitae. Ipsum nobis deserunt veritatis natus iste. Accusamus nam voluptates, magnam minus aspernatur eius est.Rem aliquam, accusantium ex consequatur cum excepturi modi quam nemo quos aliquid quas odit voluptatum esse qui nulla earum possimus?",
    modalImage: "/assets/images/collections/RobotOne.png",
  },
  // ... other cards
};
```

Changing these fields will affect the following:

`title`: This will update the main title of the first card in the collection section.

`description`: This will modify the brief description text shown on the card.

`modalDescription`: This will change the more detailed description that appears when the card is ReadMore button is clicked.

`modalImage`: This will replace the image shown for this card, both in its collapsed state and when expanded. Make sure to provide the correct path to the new image file.
### Example: Modifying the Story Types (tabs) and Story in storiesConstants.js
To change the story type, navigate to `utils/storiesConstants.js` and modify the `tabs` object. Here's the structure:
```javascript
export const tabs = [
  "Space Robots Universe", 
  "Stellar Mechanics",
  "Galactic Drift",
  "Abyss of the Cosmos",
];
```

To change the story, navigate to `utils/storiesConstants.js` and modify the `storiesData` object. Here's an example of the structure:
```javascript
{
    tab: "Space Robots Universe",
    stories: [
      {
        title: "0001: Expedition into the Unknown",
        description:
          "lorem ipsum dolor sit amet, consectetur adip nonum soc cursus",
        date: "2024-07-04",
      },
      {
        title: "0002: Stellar Shadows",
        description:
          "lorem ipsum dolor sit amet, consectetur adip nonum soc cursus",
        date: "2024-08-15",
      },
      {
        title: "0003: Galactic Echoes",
        description:
          "lorem ipsum dolor sit amet, consectetur adip nonum soc cursus",
        date: "2024-09-23",
      },
      {
        title: "0004: Abyss of the Cosmos",
        description:
          "lorem ipsum dolor sit amet, consectetur adip nonum soc cursus",
        date: "2024-10-31",
      },
    ],
  },
```

Changing these fields will affect the following:

`tab`: Chaging this variable does nothing, is there to have an easier understanding of the types of stories that belong to this.

`title`: This will modify the title from the card and from the modal.

`description`: This will change the more detailed description that appears when the card is ReadMore button is clicked.

`modalImage`: This will replace the image shown for this card, both in its collapsed state and when expanded. Make sure to provide the correct path to the new image file.
