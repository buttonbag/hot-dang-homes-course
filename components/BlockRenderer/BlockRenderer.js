export const BlockRenderer = ({blocks}) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/cover': {
        return <div>core cover</div>;
      }
      default:
        return null;
    }
  })
}