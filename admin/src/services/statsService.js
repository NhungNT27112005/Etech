import adminApi from '../api/adminApi';

class StatsService {
    async getDashboardStats() {
        const response = await adminApi.get('/api/stats/stats');
        return response.data;
    }
}
const statsService =
    new StatsService();
export default statsService;