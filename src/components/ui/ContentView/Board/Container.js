import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";

const Container = ({ id, children, title, container }) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  const handleColumnHeaderBg = (id) => {
    if (title === "REJECTED") {
      return "bg-red-100";
    }
    if (title === "APPLIED") {
      return "bg-gray-200";
    } else {
      return "bg-green-100";
    }
  };

  const handleColumnTextColor = (id) => {
    if (title === "REJECTED") {
      return "text-red-300";
    }
    if (title === "APPLIED") {
      return "text-gray-1k";
    } else {
      return "text-green-400";
    }
  };

  const handleColumnIcon = (id) => {
    if (title === "REJECTED") {
      return "assets/icons/board/rejected.svg";
    }
    if (title === "APPLIED") {
      return "assets/icons/board/applied.svg";
    } else {
      return "assets/icons/board/shortlisted.svg";
    }
  };
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "w-full h-full bg-gray-50 rounded-xl  overflow-hidden",
        isDragging && "opacity-50"
      )}
    >
      <header
        className={`p-[7px] text-[12px] flex gap-1 items-center font-semibold ${handleColumnTextColor(
          id
        )} ${handleColumnHeaderBg(id)}`}
      >
        <img src={handleColumnIcon(id)} className="w-4 h-4" />
        {title} • {container?.items?.length}
      </header>
      <div className="flex flex-col gap-2 p-2 pb-4  min-h-[20vh] max-h-[100vh] overflow-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default Container;
