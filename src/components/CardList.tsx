import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [image, setImage] = useState('');

  function handleViewImage(url: string) {
    setImage(url);

    onOpen();
  }

  return (
    <>
      <SimpleGrid
        flex="1"
        columns={[1, 1, 3]}
        spacing="40px"
        align="flex-start"
      >
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleViewImage(card.url)}
            />
          );
        })}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={image} />
    </>
  );
}