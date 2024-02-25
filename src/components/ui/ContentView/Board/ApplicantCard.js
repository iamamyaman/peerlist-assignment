import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { genConfig } from "react-nice-avatar";
import Avatar from "react-avatar";
import { MdArrowOutward } from "react-icons/md";

const ApplicantCard = ({ id, candidateData }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "p-4 bg-white rounded-[8px] w-full  border-[1px] border-gray-200 cursor-pointer",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex flex-col " {...listeners}>
        <div className="w-full flex justify-between mb-2 items-start">
          {candidateData?.source === "external" ? (
            <div className="name flex gap-1 items-center text-gray-1k text-[14px] font-semibold">
              {candidateData?.name}
            </div>
          ) : (
            // <Avatar name={candidateData?.name} round={true} size={32}></Avatar>
            <img
              src={candidateData?.profile_image}
              className="w-8 h-8 rounded-full"
            ></img>
          )}
          {candidateData?.referred_by && (
            <div className="flex items-center text-[10px] text-gray-500">
              Reffered by{" "}
              <img
                src={candidateData?.referred_by?.profile_picture}
                className="w-4 h-4 rounded-full mx-1"
              />
              <span className="font-semibold">
                {candidateData?.referred_by?.name}
              </span>
            </div>
          )}
          {!candidateData?.referred_by && (
            <p className="text-gray-500 text-[10px] font-light ">
              Applied {candidateData?.applied} ago
            </p>
          )}
        </div>

        {candidateData?.source !== "external" && (
          <div className="name flex gap-1 items-center text-gray-1k text-[14px] font-semibold">
            {candidateData?.name}
            <img src="assets/icons/verified.svg" />
          </div>
        )}

        {candidateData?.source !== "external" && (
          <div className="current-job text-[12px] text-gray-1k">
            {candidateData?.current_role} at {candidateData?.current_company}
          </div>
        )}

        {candidateData?.source !== "external" && (
          <div className="w-full flex gap-[14px] my-[10px]">
            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Experience</p>
              <span className="text-[12px] font-semibold">
                {candidateData?.years_of_experience}
              </span>
            </div>

            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Holding offer?</p>
              <span className="text-[12px] font-semibold">
                {candidateData?.holding_offer ? "Yes" : "No"}
              </span>
            </div>

            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Notice period</p>
              <span className="text-[12px] font-semibold">
                {candidateData?.notice_period}
              </span>
            </div>
          </div>
        )}

        {candidateData?.source === "external" && (
          <div className="w-full flex gap-[14px] my-[10px]">
            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Resume</p>
              <span className="text-[12px] font-semibold flex items-center">
                {candidateData?.resume} <MdArrowOutward />
              </span>
            </div>

            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Notice period</p>
              <span className="text-[12px] font-semibold">
                {candidateData?.notice_period}
              </span>
            </div>
          </div>
        )}

        {candidateData?.source !== "external" && candidateData?.contact && (
          <div className="w-full flex gap-[14px] my-[10px]">
            <div className=" flex flex-col">
              <p className="text-[10px] font-light">Contact</p>
              <span className="text-[12px] font-semibold flex items-center">
                {candidateData?.contact?.email}
              </span>
              <span className="text-[12px] font-semibold flex items-center">
                {candidateData?.contact?.phone}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantCard;
