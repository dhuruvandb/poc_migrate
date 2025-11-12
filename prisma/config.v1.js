"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: './schema.v1.prisma',
    migrations: {
        path: 'prisma/migrations-v1',
    },
    engine: 'classic',
    datasource: {
        url: 'postgresql://postgres:12345@localhost:5432/prisma_version_poc?schema=v1',
    },
});
//# sourceMappingURL=config.v1.js.map