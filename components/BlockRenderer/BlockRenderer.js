import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({blocks}) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'acf/ctabutton': {
        return <CallToActionButton 
        key={block.id}
        align={block.attributes.data.align}
        destination={block.attributes.data.destination}
        label={block.attributes.data.label}
        />
      }
      case 'core/paragraph': {
        return <Paragraph 
        key={block.id} 
        textAlign={block.attributes.style?.typography.textAlign}
        content={block.attributes.content}
        textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
        />
      }
      case 'core/heading': {
        return <Heading 
        key={block.id} 
        level={block.attributes.level}
        textAlign={block.attributes.style?.typography.textAlign}
        content={block.attributes.content}
        />
      }
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case 'core/columns': {
        return <Columns 
        key={block.id} 
        isStackedOnMobile={block.attributes.isStackedOnMobile}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      }
      case 'core/column': {
        return <Column 
        key={block.id}
        width={block.attributes?.width || ""}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Column>
      }
      case 'core/block': {
        return <section key={block.id} className="my-10 p-5"><BlockRenderer blocks={block.innerBlocks} /></section>
      }
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
      }
      case 'core/image': {
        return <Image 
        key={block.id} 
        src={block.attributes.url}
        height={block.attributes.height}
        width={block.attributes.width}
        alt={block.attributes.alt || ""}
      />
      }
      default:
        console.log("UNKNOWN: ", block);
        return null;
    }
  })
}