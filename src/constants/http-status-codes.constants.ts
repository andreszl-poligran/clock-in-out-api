export const HTTP_STATUS_CONTINUE = 100;
export const HTTP_STATUS_SWITCHING_PROTOCOLS = 101;
export const HTTP_STATUS_OK = 200;
export const HTTP_STATUS_CREATED = 201;
export const HTTP_STATUS_ACCEPTED = 202;
export const HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION = 203;
export const HTTP_STATUS_NO_CONTENT = 204;
export const HTTP_STATUS_RESET_CONTENT = 205;
export const HTTP_STATUS_PARTIAL_CONTENT = 206;
export const HTTP_STATUS_MULTIPLE_CHOICES = 300;
export const HTTP_STATUS_MOVED_PERMANENTLY = 301;
export const HTTP_STATUS_FOUND = 302;
export const HTTP_STATUS_SEE_OTHER = 303;
export const HTTP_STATUS_NOT_MODIFIED = 304;
export const HTTP_STATUS_USE_PROXY = 305;
export const HTTP_STATUS_TEMPORARY_REDIRECT = 307;
export const HTTP_STATUS_PERMANENT_REDIRECT = 308;
export const HTTP_STATUS_BAD_REQUEST = 400;
export const HTTP_STATUS_UNAUTHORIZED = 401;
export const HTTP_STATUS_PAYMENT_REQUIRED = 402;
export const HTTP_STATUS_FORBIDDEN = 403;
export const HTTP_STATUS_NOT_FOUND = 404;
export const HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
export const HTTP_STATUS_NOT_ACCEPTABLE = 406;
export const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED = 407;
export const HTTP_STATUS_REQUEST_TIMEOUT = 408;
export const HTTP_STATUS_CONFLICT = 409;
export const HTTP_STATUS_GONE = 410;
export const HTTP_STATUS_LENGTH_REQUIRED = 411;
export const HTTP_STATUS_PRECONDITION_FAILED = 412;
export const HTTP_STATUS_PAYLOAD_TOO_LARGE = 413;
export const HTTP_STATUS_URI_TOO_LONG = 414;
export const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE = 415;
export const HTTP_STATUS_RANGE_NOT_SATISFIABLE = 416;
export const HTTP_STATUS_EXPECTATION_FAILED = 417;
export const HTTP_STATUS_IM_A_TEAPOT = 418;
export const HTTP_STATUS_MISDIRECTED_REQUEST = 421;
export const HTTP_STATUS_UNPROCESSABLE_ENTITY = 422;
export const HTTP_STATUS_LOCKED = 423;
export const HTTP_STATUS_FAILED_DEPENDENCY = 424;
export const HTTP_STATUS_TOO_EARLY = 425;
export const HTTP_STATUS_UPGRADE_REQUIRED = 426;
export const HTTP_STATUS_PRECONDITION_REQUIRED = 428;
export const HTTP_STATUS_TOO_MANY_REQUESTS = 429;
export const HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS = 451;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
export const HTTP_STATUS_NOT_IMPLEMENTED = 501;
export const HTTP_STATUS_BAD_GATEWAY = 502;
export const HTTP_STATUS_SERVICE_UNAVAILABLE = 503;
export const HTTP_STATUS_GATEWAY_TIMEOUT = 504;
export const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED = 505;
export const HTTP_STATUS_VARIANT_ALSO_NEGOTIATES = 506;
export const HTTP_STATUS_INSUFFICIENT_STORAGE = 507;
export const HTTP_STATUS_LOOP_DETECTED = 508;
export const HTTP_STATUS_NOT_EXTENDED = 510;
export const HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED = 511;

export const HTTP_ERROR_MESSAGES: Record<number, string> = {
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  208: 'Already Reported',
  226: 'IM Used',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a teapot',
  421: 'Misdirected Request',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Too Early',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required',
};
