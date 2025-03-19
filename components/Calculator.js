function Calculator({ onCalculate }) {
    try {
        const [monthlyBill, setMonthlyBill] = React.useState('');
        const [error, setError] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!monthlyBill || isNaN(monthlyBill) || monthlyBill <= 0) {
                setError('Por favor, insira um valor válido');
                return;
            }
            setError('');
            onCalculate(parseFloat(monthlyBill));
        };

        return (
            <div data-name="calculator-section" className="calculator-container py-12">
                <div data-name="calculator-container" className="container mx-auto px-4 max-w-2xl">
                    <form data-name="calculator-form" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                        <div data-name="form-content" className="space-y-6">
                            <div data-name="input-group">
                                <label 
                                    data-name="input-label"
                                    htmlFor="monthlyBill" 
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Qual é o seu gasto mensal com energia elétrica? (R$)
                                </label>
                                <div data-name="input-wrapper" className="relative">
                                    <span 
                                        data-name="currency-symbol"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        R$
                                    </span>
                                    <input
                                        data-name="bill-input"
                                        type="number"
                                        id="monthlyBill"
                                        value={monthlyBill}
                                        onChange={(e) => setMonthlyBill(e.target.value)}
                                        className="input-field w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                    />
                                </div>
                                {error && (
                                    <p data-name="error-message" className="text-red-500 text-sm mt-2">{error}</p>
                                )}
                            </div>
                            <button
                                data-name="calculate-button"
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                            >
                                Calcular Economia
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Calculator component error:', error);
        reportError(error);
        return null;
    }
}
