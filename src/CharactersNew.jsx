import axios from "axios";
import { useState } from "react";

export function CharactersNew({ onCreate }) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [race, setRace] = useState("");
  const [background, setBackground] = useState("");
  const [alignment, setAlignment] = useState("");
  const [abilityScore, setAbilityScore] = useState("");
  const [condition, setCondition] = useState("");
  const [damageType, setDamageType] = useState("");
  const [equipment, setEquipment] = useState("");
  const [equipmentCategory, setEquipmentCategory] = useState("");
  const [feat, setFeat] = useState("");
  const [feature, setFeature] = useState("");
  const [language, setLanguage] = useState("");
  const [magicItem, setMagicItem] = useState("");
  const [magicSchool, setMagicSchool] = useState("");
  const [monster, setMonster] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [ruleSection, setRuleSection] = useState("");
  const [rule, setRule] = useState("");
  const [skill, setSkill] = useState("");
  const [spell, setSpell] = useState("");
  const [subclass, setSubclass] = useState("");
  const [subrace, setSubrace] = useState("");
  const [trait, setTrait] = useState("");
  const [weaponProperty, setWeaponProperty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  const getRandomFromAPI = (endpoint, setter) => {
    axios.get(`https://www.dnd5eapi.co${endpoint}`).then((response) => {
      const randomValue = response.data.results.sort(() => 0.5 - Math.random())[0].name;
      setter(randomValue);
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white font-cinzel mb-6 text-center">Create a New Character</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Name:</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/races", setName)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Name
            </button>
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Class:</label>
            <input
              name="class_name"
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/classes", setClassName)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Class
            </button>
          </div>

          {/* Race */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Race:</label>
            <input
              name="race"
              type="text"
              value={race}
              onChange={(e) => setRace(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/races", setRace)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Race
            </button>
          </div>

          {/* Background */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Background:</label>
            <input
              name="background"
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/backgrounds", setBackground)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Background
            </button>
          </div>

          {/* Alignment */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Alignment:</label>
            <input
              name="alignment"
              type="text"
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/alignments", setAlignment)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Alignment
            </button>
          </div>

          {/* Ability Score */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Ability Score:</label>
            <input
              name="ability_score"
              type="text"
              value={abilityScore}
              onChange={(e) => setAbilityScore(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/ability-scores", setAbilityScore)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Ability Score
            </button>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Condition:</label>
            <input
              name="condition"
              type="text"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/conditions", setCondition)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Condition
            </button>
          </div>

          {/* Damage Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Damage Type:</label>
            <input
              name="damage_type"
              type="text"
              value={damageType}
              onChange={(e) => setDamageType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/damage-types", setDamageType)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Damage Type
            </button>
          </div>

          {/* Equipment */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Equipment:</label>
            <input
              name="equipment"
              type="text"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/equipment", setEquipment)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Equipment
            </button>
          </div>

          {/* Equipment Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Equipment Category:</label>
            <input
              name="equipment_category"
              type="text"
              value={equipmentCategory}
              onChange={(e) => setEquipmentCategory(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/equipment-categories", setEquipmentCategory)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Equipment Category
            </button>
          </div>

          {/* Feat */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Feat:</label>
            <input
              name="feat"
              type="text"
              value={feat}
              onChange={(e) => setFeat(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/feats", setFeat)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Feat
            </button>
          </div>

          {/* Feature */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Feature:</label>
            <input
              name="feature"
              type="text"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/features", setFeature)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Feature
            </button>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Language:</label>
            <input
              name="language"
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/languages", setLanguage)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Language
            </button>
          </div>

          {/* Magic Item */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Magic Item:</label>
            <input
              name="magic_item"
              type="text"
              value={magicItem}
              onChange={(e) => setMagicItem(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/magic-items", setMagicItem)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Magic Item
            </button>
          </div>

          {/* Magic School */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Magic School:</label>
            <input
              name="magic_school"
              type="text"
              value={magicSchool}
              onChange={(e) => setMagicSchool(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/magic-schools", setMagicSchool)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Magic School
            </button>
          </div>

          {/* Monster */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Monster:</label>
            <input
              name="monster"
              type="text"
              value={monster}
              onChange={(e) => setMonster(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/monsters", setMonster)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Monster
            </button>
          </div>

          {/* Proficiency */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Proficiency:</label>
            <input
              name="proficiency"
              type="text"
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/proficiencies", setProficiency)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Proficiency
            </button>
          </div>

          {/* Rule Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Rule Section:</label>
            <input
              name="rule_section"
              type="text"
              value={ruleSection}
              onChange={(e) => setRuleSection(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/rule-sections", setRuleSection)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Rule Section
            </button>
          </div>

          {/* Rule */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Rule:</label>
            <input
              name="rule"
              type="text"
              value={rule}
              onChange={(e) => setRule(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/rules", setRule)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Rule
            </button>
          </div>

          {/* Skill */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Skill:</label>
            <input
              name="skill"
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/skills", setSkill)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Skill
            </button>
          </div>

          {/* Spell */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Spell:</label>
            <input
              name="spell"
              type="text"
              value={spell}
              onChange={(e) => setSpell(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/spells", setSpell)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Spell
            </button>
          </div>

          {/* Subclass */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Subclass:</label>
            <input
              name="subclass"
              type="text"
              value={subclass}
              onChange={(e) => setSubclass(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/subclasses", setSubclass)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Subclass
            </button>
          </div>

          {/* Subrace */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Subrace:</label>
            <input
              name="subrace"
              type="text"
              value={subrace}
              onChange={(e) => setSubrace(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/subraces", setSubrace)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Subrace
            </button>
          </div>

          {/* Trait */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Trait:</label>
            <input
              name="trait"
              type="text"
              value={trait}
              onChange={(e) => setTrait(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/traits", setTrait)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Trait
            </button>
          </div>

          {/* Weapon Property */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Weapon Property:</label>
            <input
              name="weapon_property"
              type="text"
              value={weaponProperty}
              onChange={(e) => setWeaponProperty(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              onClick={() => getRandomFromAPI("/api/weapon-properties", setWeaponProperty)}
              className="mt-2 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Random Weapon Property
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
          >
            Create Character
          </button>
        </div>
      </form>
    </div>
  );
}
