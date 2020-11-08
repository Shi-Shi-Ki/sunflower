<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Session\TokenMismatchException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        $status = 500;
        $message = $exception->getMessage();
        if ($exception instanceof AuthenticationException) {
            // oauth error
            $status = 401;
        } else if ($exception instanceof TokenMismatchException) {
            // csrf token error.
            $status = 421;
        } else if ($this->isHttpException($exception)) {
            // apis error
            $status = $exception->getStatusCode();
        }
        return new JsonResponse([
            'errors' => [
                'message' => $message
            ]
        ], $status);
        //return parent::render($request, $exception);
    }
}
