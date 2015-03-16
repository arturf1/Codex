# serverTemplate.py
# Author: Artur Filipowicz
# Date: 2/16/2015
# Version: 1.0
#
# Execution: python serverTemplate.py portNumber
# Description: Template for a multithreated python serve. 
# Works with Python 2.7
#
# License: The MIT License (MIT) Copyright (c) 2015
########################################################################
import sys
import SocketServer
import SimpleHTTPServer

class SingleTCPHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
  def do_GET(self):
    # query arrives in self.path
    self.wfile.write("query was %s\n" % self.path)

def main():
  HOST = '' #  localhost
  PORT = 50007

  # second argument can be a port number
  if len(sys.argv) == 2:
    PORT = int(sys.argv[1])

  server = SocketServer.ForkingTCPServer((HOST, PORT), SingleTCPHandler)
  server.serve_forever()

main()