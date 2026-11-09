export interface FactTranslation {
  content: string;
  languageCode: string;
}

/** Response of `GET /fact-of-the-day/random` (FactOfTheDayTranslationDTO). */
export interface FactOfTheDay {
  id: number;
  factOfTheDayTranslations: FactTranslation[];
}

/** Item of `GET /categories` (CategoryDto). */
export interface CategoryDto {
  nameEn: string;
  nameUk: string | null;
  parentCategoryId: number | null;
}

/** Item of `GET /specification` (SpecificationNameDto). */
export interface SpecificationNameDto {
  name: string;
}
