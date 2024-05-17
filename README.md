# Setup

`~/ yarn install`

# Run

`~/ yarn dev`

# Create Migration table

`npx sequelize-cli migration:generate --name create-users-table`

# Migrate DB

```
typeorm migration:create src/migration/User
```
