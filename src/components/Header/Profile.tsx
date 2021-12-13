import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Moreira</Text>
          <Text color="gray.300" fontSize="small">
            lucasguilheme.31@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lucas Moreira"
        src="https://github.com/catapultaazul.png"
      />
    </Flex>
  );
}
