import { ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { ListItemContentProps } from "../../types";
import "./ListItemContent.css";

export const ListItemContent: React.FC<ListItemContentProps> = ({
  primary,
  secondary,
  img,
  imgVariant,
}) => {
  return (
    <div className="list-item-content">
      <>
        {img && (
          <ListItemAvatar className="list-item-avatar">
            <Avatar
              sx={{ width: 24, height: 24 }}
              variant={imgVariant}
              src={img}
            />
          </ListItemAvatar>
        )}
        <div className="list-item-content-text">
          {primary && <ListItemText primary={primary} />}
          {secondary && <ListItemText secondary={secondary} />}
        </div>
      </>
    </div>
  );
};
