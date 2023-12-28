import { Server } from 'miragejs';
import documentRoutes from './documentRoutes';
import setupOverviewRoutes from './overviewRoutes';
import setupMenuRoutes from './menuRoutes';
import setupUserRoutes from './userRoutes';
import setupSearchRoutes from './searchRoutes';

export default function setupMockRoutes(server: Server) {
    documentRoutes(server);
    setupOverviewRoutes(server);
    setupMenuRoutes(server);
    setupUserRoutes(server);
    setupSearchRoutes(server);
}
