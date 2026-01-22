import { Divider, Stack } from "@mui/material";
import { DividerTitle, DividerTitleButton } from "./styles";

function TitledDivider({ title, onClick, btnText }) {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      paddingBottom={5}
      width="100%"
    >
      <DividerTitle variant="h1">{title}</DividerTitle>
      <Divider flexItem sx={{ flexGrow: 1, alignSelf: "center" }} />
      <DividerTitleButton onClick={onClick} variant="outlined">
        {btnText}
      </DividerTitleButton>
    </Stack>
  );
}

export default TitledDivider;
