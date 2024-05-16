import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../sequelize";
import { ulid } from "ulid";
import { USER_STATUS } from "../constants/user.const";

export interface UserAttributes {
  id: string;
  email: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  locale?: string | null;
  emailVerifiedAt?: Date | null;
  avatar?: string | null;
  phone?: string | null;
  userRole?: string | null;
  password?: string;
  status?: string | null;
  dob?: Date | null;
  country?: string | null;
  gender?: string | null;
  meta?: object | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public email!: string;
  public firstName?: string | null;
  public middleName?: string | null;
  public lastName?: string | null;
  public timezone?: string | null;
  public locale?: string | null;
  public emailVerifiedAt?: Date | null;
  public avatar?: string | null;
  public phone?: string | null;
  public userRole?: string | null;
  public password!: string;
  public status!: string;
  public dob?: Date | null;
  public country?: string | null;
  public gender?: string | null;
  public meta?: object | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;
}

User.init(
  {
    id: {
      type: DataTypes.STRING(26),
      primaryKey: true,
      allowNull: false,
      defaultValue: () => ulid(), // Use ulid as the default value
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    middleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    timezone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    locale: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    emailVerifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    userRole: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(USER_STATUS)),
      allowNull: false,
      defaultValue: USER_STATUS.NOT_VERIFY,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    meta: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    paranoid: true,
    timestamps: true,
  }
);

export default User;
