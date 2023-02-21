import React, { useState } from "react";
import { TreeNodeProps } from "../../types";
import { Collapse, ListItem, ListItemIcon } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./TreeNode.css";
import { ListItemContent } from "../ListItemContent/ListItemContent";
import icons from "../../assets/index.js";

export const TreeNode: React.FC<TreeNodeProps> = ({
  id,
  label,
  text,
  img,
  depth = 0,
  children = [],
  indent = 8,
  isOpen = false,
  loadChildren = null,
  hasChildren = false,
  imgVariant,
  onSelectItem,
}) => {
  const [open, setOpen] = useState(isOpen);
  const supportAsyncLoading = !!loadChildren;
  const [loading, setLoading] = useState(false);
  const showLoadingPlaceholer = supportAsyncLoading && loading;

  const onToggleCollapse = () => {
    setOpen(!open);
    if (supportAsyncLoading && !open && hasChildren && !children?.length) {
      setLoading(true);
      loadChildren(id).then(() => setLoading(false));
    }
  };

  const renderExpandButton = () => {
    const btn = open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
    const shouldRender =
      (!supportAsyncLoading && children?.length) ||
      (supportAsyncLoading && hasChildren);

    return shouldRender ? btn : null;
  };

  const identationStyle = { paddingLeft: depth * indent };
  return (
    <>
      <ListItem
        style={identationStyle}
        className="list-item expndable"
        onClick={children && onToggleCollapse}
      >
        <div onClick={() => onSelectItem(id)}>
          <ListItemContent
            imgVariant={imgVariant}
            primary={label}
            secondary={text}
            img={img}
          />
        </div>
        <ListItemIcon className="list-item-icon" onClick={onToggleCollapse}>
          {renderExpandButton()}
        </ListItemIcon>
      </ListItem>
      {!showLoadingPlaceholer ? (
        <>
          {children ? (
            <Collapse in={open}>
              {children.map((item) => (
                <TreeNode
                  onSelectItem={onSelectItem}
                  imgVariant={imgVariant}
                  loadChildren={loadChildren}
                  depth={depth + 1}
                  key={item.id}
                  {...item}
                />
              ))}
            </Collapse>
          ) : null}
        </>
      ) : (
          // dummy loading placeholder
        <ListItem style={identationStyle} className="list-item">
          <ListItemContent
            imgVariant={imgVariant}
            img={icons.loading}
            primary="loading..."
          />
        </ListItem>
      )}
    </>
  );
};
