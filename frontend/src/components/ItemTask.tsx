import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Task } from "../types/Task";
import { Add, DeleteOutline } from "@mui/icons-material";

const ItemTask = ({ content }: Task) => {
  return (
    <ListItem
      sx={{
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
      secondaryAction={
        <>
          <IconButton>
            <Add color="success" />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "50%",
            }}
          >
            <DeleteOutline color="error" />
          </IconButton>
        </>
      }
    >
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText
        sx={{
          color: "gray",
        }}
      >
        {content}
      </ListItemText>
    </ListItem>
  );
};

export { ItemTask };
