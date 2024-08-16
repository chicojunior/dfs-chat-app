**### Coding Challenge (Angular or React/Nodejs)**

Hello dear candidate,

We are pleased you are reading this, which means your profile attracted us and we are keen to see your skills in practice.

How to approach this challenge:

- If your skills are more focused on Frontend Development, then please focus on Frontend and do a simple Backend.
- If your skills are more focused on Backend Development, then please focus on Backend and do a simple Frontend.
- If your skills are focused on both, as Fullstack, then please provide a more complete solution in both parts.

For this we kindly ask you to demonstrate your solution for the following situation.

- You need to develop a simple microservice in Nodejs using Typescript which will allow users to chat with one of customer service in order to chose a topic
- The API must have at least 2 endpoints: one to return which is the person that should chat with the user, and the second should return a set of topics which user can chose. These topics should have some listed suggestion as well. Tree of nodes with suggestions should not have more than 2 level depth
- Frontend should be done using Angular or React (preferably latest releases because for us it is important to keep things up-to-date) with Typescript
- The application should have a chat button, which when clicked should open a modal and do a request toward the first endpoint to get who from customer service people is free and then display this person's name in the header of modal
- After the customer service person was chosen, from the tree of topics/suggestions display root topics and let the user click the topic. After the topic is chosen, display the answer. This process should continue until the depth is reached.
- When depth is reached, display a thank you message.

Good styling is not a must, but feel free to use whatever suits your preference (if you have Frontend focused challenge)

Extra requirements:

- Every piece of logic should be tested with unit test
- Behaviour of system should be tested with e2e test
- Write a Github action to run a simple pipeline that contains all requirements above

Example of Topic/Suggestions Tree:

1. Football
   1. Premier League
      1. Liverpool
      2. Man. UTD
      3. Man. City
   2. Seria A
      1. Milan
      2. Inter
      3. Juventus
2. Books
   1. Investment
      1. The Intelligent Investor - Benjamin Graham
      2. Rich Dad, Poor Dad - Robert Kiyosaki
   2. Children
      1. Momo - Micheal Ende
      2. BFG - Roald Dahl

Treat this task as you would like to introduce these services for your company or your project. Think about which best practices you would like to apply. Feel free to use any frameworks, libraries, or technologies.

**We understand that architecting even a small service will normally take more time than a typical code task should. Therefore, please provide as much as possible within a reasonable time. In this case more important would be to share what would you improve and develop further, if you had unlimited time. Please write a few notes about it.**

When you are done, please submit your solution and bring it in the interview time.
