import { QueryInterface, DataTypes } from "sequelize";
import { ulid } from "ulid";
import timestamps from "../../utils/timestamps";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(26), // ULID length is 26 characters
        defaultValue: () => ulid(), // Use ulid as the default value
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50),
      },
      firstName: {
        allowNull: true,
        type: DataTypes.STRING(50),
      },
      middleName: {
        allowNull: true,
        type: DataTypes.STRING(50),
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING(50),
      },
      timezone: {
        allowNull: true,
        type: DataTypes.STRING(10),
      },
      locale: {
        allowNull: true,
        type: DataTypes.STRING(10),
      },
      emailVerifiedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      avatar: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING(15),
      },
      userRole: {
        allowNull: true,
        type: DataTypes.STRING(50),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(60),
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      dob: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      country: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      gender: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      skill: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      meta: {
        allowNull: true,
        type: DataTypes.JSON,
      },
      ...timestamps,
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("user");
  },
};
