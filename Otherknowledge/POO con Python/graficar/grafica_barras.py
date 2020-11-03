from bokeh.plotting import figure, show
from bokeh.models import ColumnDataSource, HBar

x = 'Spierman Homecumming'

y = 5

p = figure(title = 'Airports (?)', x_axis_label = 'Votos por película', y_axis_label = 'Numero de Votos')

glyph = HBar(y=y, right="right", left=0, height=0.5, fill_color="#b3de69")


show(p)
