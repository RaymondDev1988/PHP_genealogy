<?php

namespace App\Http\Controllers\Familyslugs;

use App\FamilySlgs;
use App\Http\Requests\ValidateFamilySlgsRequest;
use Illuminate\Routing\Controller;

class Update extends Controller
{
    public function __invoke(ValidateFamilySlgsRequest $request, FamilySlgs $familySlgs)
    {
        $familySlgs->update($request->validated());

        return ['message' => __('The family slgs was successfully updated')];
    }
}
