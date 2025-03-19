function Results({ savings }) {
    try {
        if (!savings) return null;

        return (
            <div data-name="results-section" className="bg-gray-50 py-12">
                <div data-name="results-container" className="container mx-auto px-4 max-w-4xl">
                    <div data-name="results-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div data-name="monthly-savings" className="result-card bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <i className="fas fa-coins text-yellow-500 text-3xl mb-4"></i>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Economia Mensal</h3>
                                <p className="text-2xl font-bold text-green-600">
                                    R$ {savings.monthly.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <div data-name="annual-savings" className="result-card bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <i className="fas fa-calendar-alt text-blue-500 text-3xl mb-4"></i>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Economia Anual</h3>
                                <p className="text-2xl font-bold text-green-600">
                                    R$ {savings.annual.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <div data-name="twenty-year-savings" className="result-card bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <i className="fas fa-chart-line text-purple-500 text-3xl mb-4"></i>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Economia em 20 Anos</h3>
                                <p className="text-2xl font-bold text-green-600">
                                    R$ {savings.twentyYears.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-name="additional-info" className="mt-8 text-center text-gray-600">
                        <p className="mb-2">
                            <i className="fas fa-info-circle mr-2"></i>
                            Estas estimativas consideram a média de geração solar no Brasil
                        </p>
                        <p>
                            <i className="fas fa-lightbulb mr-2"></i>
                            A economia real pode variar dependendo da região e condições climáticas
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Results component error:', error);
        reportError(error);
        return null;
    }
}
