import React from 'react';
import { FiEdit3, FiUsers, FiPlus } from "react-icons/fi";
import { IconType } from "react-icons";

const IconWrapper = ({ Icon }: { Icon: IconType }): JSX.Element => {
  return <Icon />;
};

export const EditIcon = (): JSX.Element => <IconWrapper Icon={FiEdit3} />;
export const UsersIcon = (): JSX.Element => <IconWrapper Icon={FiUsers} />;
export const PlusIcon = (): JSX.Element => <IconWrapper Icon={FiPlus} />; 