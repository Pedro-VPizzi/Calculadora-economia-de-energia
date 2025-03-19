function Header() {
    try {
        return (
            <header data-name="header" className="bg-white shadow-sm py-6">
                <div data-name="header-container" className="container mx-auto px-4">
                    <div data-name="header-content" className="flex items-center justify-center">
                        <i className="fas fa-solar-panel text-yellow-500 text-4xl mr-3"></i>
                        <h1 data-name="header-title" className="text-2xl font-bold text-gray-800">
                            Calculadora de Economia Solar
                        </h1>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
