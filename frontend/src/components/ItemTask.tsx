import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Task } from "../types/Task";
import { DeleteOutline, Edit } from "@mui/icons-material";

const ItemTask = ({ content, checked }: Task) => {
  return (
    <ListItem
      sx={{
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
      secondaryAction={
        <>
          <IconButton>
            <Edit color="info" />
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
        <Checkbox checked={checked} />
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
