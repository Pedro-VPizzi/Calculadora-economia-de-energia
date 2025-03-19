function calculateSolarSavings(monthlyBill) {
    // Considerando uma média de economia de 95% na conta de energia
    const monthlyReduction = monthlyBill * 0.95;
    
    // Cálculo anual
    const annualSavings = monthlyReduction * 12;
    
    // Cálculo para 20 anos (vida útil média dos painéis solares)
    const twentyYearSavings = annualSavings * 20;
    
    return {
        monthly: monthlyReduction,
        annual: annualSavings,
        twentyYears: twentyYearSavings
    };
}
