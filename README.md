Generic tree node component

start - npm run storybook

- storybook has two demos - sync and async (TreeNode children loaded on first open instance)

- virtualization is not supported on purpose - wasn't the goal, time was limited;

- loading placeholder is sort of dummy - spiner not gonna spin

- species data is ai generated, I am not a pro biologist

- async demo fake loader is ugly on purpose, not a part of the component.

- api is minimalistic - this thing was done in 4h, spent some extra time to self review and add storybook but didn't implement some basic configurations like collapse child nodes on close, max height, virtualization, unmount child nodes and other props that such a component must have.