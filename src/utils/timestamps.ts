import { DataTypes } from "sequelize";

const timestamps = {
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    allowNull: true, // Usually allowNull is true for soft deletes
    type: DataTypes.DATE,
  },
};

export default timestamps;
