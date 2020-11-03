from bokeh.plotting import figure, output_file, show
#1. una ventana para ver | 2. convertir a p. ej HTML | 3. Crear servidor para verlo

if __name__ == "__main__":
    output_file('Grafica_simple.html')
    #nombre del archivo
    fig = figure(title = 'Diagrama de contagios en Colombia', x_axis_label='Meses', y_axis_label='Cientos de contagios') 
    #Regresa una figura | con titulo, y etiquetas para cada eje
    
    total_vals = int(input('¿Cuántos valores quieres graficar? '))
    #Cuantos valores vamos a pedir

    #Valores x (variable independiente) && Y (variable dependiente)
    x_vals = list(range(0, total_vals))
    y_vals =[]

    for i in x_vals:
        #A cada x le damos una Y, incluyendo X en 0, por si empieza en una altitud ya
        val = int(input(f'Valor de Y para x en {i}: '))
        y_vals.append(val)

    fig.line(x_vals, y_vals, legend_label="Numero de Contagiados", line_width= 8)
    #.line es para especificar atributos como la leyenda, junto con x y y al principio
    '''Otros: line_dash, line_color'''
    fig.circle(x_vals, y_vals, legend_label="y=x", fill_color="white", size=8)
    '''Otros: line_color, para la cicunferencia  '''
    #.circle crea ciculos en las cordenadas que le digan, como igual que line, tiene tamaño, legenda y color etc
    #la funcion pide principalmente x e y como arrays; legend_label indicacion de la linea

    show(fig)
    #muestra la figura que creamos con = Figure()