<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::inertia('/', 'welcome')->name('home');

Route::get('/posts', [PostController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
