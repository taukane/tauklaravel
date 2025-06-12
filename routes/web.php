<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/introduction', function () {
    return Inertia::render('introduction');
})->name('introduction');

Route::get('/portfolio', function () {
    return Inertia::render('portfolio');
})->name('portfolio');

Route::get('/tools', function () {
    return Inertia::render('tools');
})->name('tools');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/contato', function () {
    return Inertia::render('contato');
})->name('contato');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
