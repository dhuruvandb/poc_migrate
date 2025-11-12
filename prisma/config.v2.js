"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: './schema.v2.prisma',
    migrations: {
        path: 'prisma/migrations-v2',
    },
    engine: 'classic',
    datasource: {
        url: 'postgresql://postgres:12345@localhost:5432/prisma_version_poc?schema=v2',
    },
});
//# sourceMappingURL=config.v2.js.map