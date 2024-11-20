using StringManipulation;
using Xunit;

public class CalculadoraTests
{
    [Fact]
    public void CalcularOperacion_DeberiaRetornarResultadoCorrecto()
    {
        var calculadora = new Calculadora();
        var resultadoEsperado = -32;
        var resultadoObtenido = calculadora.CalcularOperacion();
        
        Console.WriteLine($"Resultado esperado: {resultadoEsperado}");
        Console.WriteLine($"Resultado obtenido: {resultadoObtenido}");

        Assert.Equal(resultadoEsperado, resultadoObtenido);
    }
}
