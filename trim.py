import mincss
from mincss.processor import Processor

p = Processor()
p.process_url('https://www.peterbe.com')
print p.links
