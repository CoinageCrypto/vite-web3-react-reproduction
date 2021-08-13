// Shim for @walletconnect/socket-transport which depends on some Node globals
import { Buffer } from 'buffer';
import process from 'process';

window.global = window;
window.Buffer = Buffer;
window.process = process;
