module.exports=(sequelize, DataTypes)=>{
    return sequelize.define(
        'Pizzas',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            preco: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            destaque: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "pizzas",
            timestamps: false
        }
    );
};