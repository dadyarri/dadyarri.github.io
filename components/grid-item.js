import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Badge } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, title, href, thumbnail }) => {
  return (
    <Box w={'100%'} align={'center'}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
          loading={'lazy'}
        />
      </LinkBox>
      <LinkOverlay href={href} target={'_blank'}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </Box>
  );
};

export const ProjectsGridItem = ({
  children,
  id,
  title,
  thumbnail,
  labels
}) => {
  const colorSchemas = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink'
  ];
  return (
    <Box w={'100%'} align={'center'}>
      <NextLink href={`/project/${id}`}>
        <LinkBox cursor={'pointer'}>
          <Image
            src={thumbnail ? thumbnail : '/images/placeholder.png'}
            alt={title}
            className={'grid-item-thumbnail'}
            loading={'lazy'}
            width={200}
            height={200}
          />
          <LinkOverlay href={`/project/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
      {labels
        ? labels.map((label, _) => (
            <Badge
              colorScheme={
                colorSchemas[Math.floor(Math.random() * colorSchemas.length)]
              }
              variant={'outline'}
              mx={1}
            >
              {label}
            </Badge>
          ))
        : null}
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
  />
);
