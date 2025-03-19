function App() {
    try {
        const [savings, setSavings] = React.useState(null);

        const handleCalculate = (monthlyBill) => {
            const results = calculateSolarSavings(monthlyBill);
            setSavings(results);
        };

        return (
            <div data-name="app-container">
                <Header />
                <Calculator onCalculate={handleCalculate} />
                <Results savings={savings} />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
