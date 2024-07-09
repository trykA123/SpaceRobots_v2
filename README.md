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
### Example: Modifying the title in heroConstants.js
To change the content of the hero, navigate to `utils/heroContants.js` and modify the `text` object. Here's an example of the structure:
```javascript
export const text = {
  title: "Explore the Unknown with Space Robots",
};
```

Changing these fields will affect the following:

`title`: This will update the title from the Hero Section.
### Example: Modifying the title in heroConstants.js
To change the content of a project, navigate to `utils/projectConstants.js` and modify the `projectContent` object. Here's an example of the structure:
```javascript
export const projectContent = {
  cards: {
    firstCard: "Upgradeble robots",
    secondCard: "Multiple Collections",
    thirdCard: "7777 Robots",
    fourthCard: "Customize your future",
    fifthCard: "Unlock new possibilities",
    sixthCard: "Create your own robot",
  },
  button: {
    text: "Read More",
  },
};

```

The Project Section is a grid format with 3 columns. Changing these fields will affect the following:

`cards.firstCard`: This will update the card from col 2 row 1.

`cards.secondCard`: This will update the card from col 3 row 1.

`cards.thirdCard`: This will update the card from col 2 row 2.

`cards.fourthCard`: This will update the card from col 3 row 2.

`cards.fifthCard`: This will update the card from col 2 row 3.

`cards.sixthCard`: This will update the card from col 3 row 3.

`button.text`: This will update the button from col 3.
### Example: Modifying a Roadmap Item in roadmapConstants.js
To change the content of a roadmap item, navigate to `utils/roadmapConstants.js` and modify the `roadmapSections`array. Here's an example of the structure:
```javascript
// ROADMAP CONSTANTS
export const titles = {
  Q1: "Done",
  Q2: "In Progress",
  Q3: "Planned",
};

// Roadmap Section
export const roadmapSections = [
  {
    // DONE Phase
    title: titles.Q1,
    firstMilestoneCard: {
      title: "PHX Protocol",
      info: "Our new PHX Unlock is scheduled for Q1 release. Use this protocol to gain access to a special collection of RoboParts and unleash the full power of your PHX RoboPack.",
    },
    secondMilestoneCard: {
      title: "Website Upgrade",
      info: "The redesigned user interface will provide an updated look and feel to better cater to today's standards, as well as enhanced capabilities for greater utilization. The project aims to give its users the best possible experience and make it easier for them to access the tools and services they need. The Website Upgrade is an integral part of such an endeavor.",
    },
    thirdMilestoneCard: {
      title: "ΣUpgrade",
      info: "The service will let people add breathtaking RoboParts to their Space Robots NFTs, which will play a significant role in improving your robot's competitiveness and aesthetics. The stats will be pivotal in the gamified Staking mechanism's new architecture. While the rarity of your RoboParts will ultimately determine where your robot stands in the rankings.",
    },
    forthMilestoneCard: {
      title: "ΣLadder",
      info: "ΣLadder, a set of instruments that will enable users to plan their strategies and make better decisions for the Staking Seasons.",
    },
  },
  // ... other phases
];
```

Changing these fields will affect the following:

`title`: This will update the phase name in the roadmap section.

`firstMilestoneCard`, `secondMilestoneCard`, `thirdMilestoneCard`, `forthMilestoneCard` 

These objects contain:

`title`: The title of the milestone.

`info`: A brief description of the milestone.
### Example: Modifying the Team Section in teamConstants.js
To change the content of a team member, navigate to `utils/teamConstants.js` and modify the team object. Here's an example of the structure:
```javascript
export const team = {
  names: {
    name1: "Tarantulo",
    name2: "Simpleprick",
    name3: "Borisake",
    name4: "Jorje",
    name5: "EM",
    name6: "trykA",
  },
  roles: {
    role1: "Co-Owner",
    role2: "Co-Owner",
    role3: "CEO",
    role4: "CTO",
    role5: "Developer",
    role6: "Developer",
  },
  images: {
    image1: "/assets/images/team/spacerobots-team-tarantulo.jpg",
    image2: "/assets/images/team/spacerobots-team-simpleprick.jpg",
    image3: "/assets/images/team/spacerobots-team-borisake.jpg",
    image4: "/assets/images/team/spacerobots-team-jorje.jpg",
    image5: "/assets/images/team/spacerobots-team-em.jpg",
    image6: "/assets/images/team/spacerobots-team-tryka.jpg",
  },
};
```

Changing these fields will affect the following:

* `names`: Contains the names of the team members.

   * `name1`, `name2`, etc.:  Each name field corresponds to a team member.

* `roles`: Contains the roles of the team members.

   * `role1`, `role2`, etc.: Each role field corresponds to a team member's role.

* `images`: Contains the paths to the images of the team members.
   * `image1`, `image2`, etc.: Each image field corresponds to a team member's image. Make sure to provide the correct path to the new image file.
