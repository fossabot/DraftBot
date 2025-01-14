-- Up

ALTER TABLE shop RENAME COLUMN shop_potion_id TO shopPotionId;

ALTER TABLE armors RENAME COLUMN french_masculine TO frenchMasculine;
ALTER TABLE armors RENAME COLUMN french_plural TO frenchPlural;

ALTER TABLE weapons RENAME COLUMN french_masculine TO frenchMasculine;
ALTER TABLE weapons RENAME COLUMN french_plural TO frenchPlural;

ALTER TABLE potions RENAME COLUMN french_masculine TO frenchMasculine;
ALTER TABLE potions RENAME COLUMN french_plural TO frenchPlural;

ALTER TABLE objects RENAME COLUMN french_masculine TO frenchMasculine;
ALTER TABLE objects RENAME COLUMN french_plural TO frenchPlural;

ALTER TABLE pet_entities RENAME COLUMN pet_id TO petId;
ALTER TABLE pet_entities RENAME COLUMN give_birth_date TO giveBirthDate;

ALTER TABLE players RENAME COLUMN entity_id TO entityId;
ALTER TABLE players RENAME COLUMN guild_id TO guildId;
ALTER TABLE players RENAME COLUMN pet_id TO petId;
ALTER TABLE players RENAME COLUMN map_id TO mapId;
ALTER TABLE players RENAME COLUMN previous_map_id TO previousMapId;
ALTER TABLE players RENAME COLUMN start_travel_date TO startTravelDate;
ALTER TABLE players RENAME COLUMN effect_end_date TO effectEndDate;
ALTER TABLE players RENAME COLUMN effect_duration TO effectDuration;
ALTER TABLE players RENAME COLUMN last_pet_free TO lastPetFree;

ALTER TABLE inventories RENAME COLUMN player_id TO playerId;
ALTER TABLE inventories RENAME COLUMN weapon_id TO weaponId;
ALTER TABLE inventories RENAME COLUMN armor_id TO armorId;
ALTER TABLE inventories RENAME COLUMN potion_id TO potionId;
ALTER TABLE inventories RENAME COLUMN object_id TO objectId;
ALTER TABLE inventories RENAME COLUMN backup_id TO backupId;

ALTER TABLE servers RENAME COLUMN discordGuild_id TO discordGuildId;

ALTER TABLE events RENAME COLUMN restricted_maps TO restrictedMaps;

ALTER TABLE possibilities RENAME COLUMN event_id TO eventId;
ALTER TABLE possibilities RENAME COLUMN restricted_maps TO restrictedMaps;

ALTER TABLE event_map_location_ids RENAME COLUMN event_id TO eventId;
ALTER TABLE event_map_location_ids RENAME COLUMN map_location_id TO mapLocationId;

ALTER TABLE guild_pets RENAME COLUMN guild_id TO guildId;
ALTER TABLE guild_pets RENAME COLUMN pet_entity_id TO petEntityId;

ALTER TABLE guilds RENAME COLUMN chief_id TO chiefId;
ALTER TABLE guilds RENAME COLUMN elder_id TO elderId;

ALTER TABLE player_small_events RENAME COLUMN player_id TO playerId;
ALTER TABLE player_small_events RENAME COLUMN event_type TO eventType;

ALTER TABLE pets RENAME COLUMN maleName_fr TO maleNameFr;
ALTER TABLE pets RENAME COLUMN maleName_en TO maleNameEn;
ALTER TABLE pets RENAME COLUMN femaleName_fr TO femaleNameFr;
ALTER TABLE pets RENAME COLUMN femaleName_en TO femaleNameEn;

ALTER TABLE entities RENAME COLUMN discordUser_id TO discordUserId;


ALTER TABLE map_locations RENAME COLUMN particle_fr TO particleFr;
ALTER TABLE map_locations RENAME COLUMN particle_en TO particleEn;

ALTER TABLE map_locations RENAME COLUMN north_map TO northMap;
ALTER TABLE map_locations RENAME COLUMN east_map TO eastMap;
ALTER TABLE map_locations RENAME COLUMN south_map TO southMap;
ALTER TABLE map_locations RENAME COLUMN west_map TO westMap;

ALTER TABLE map_locations RENAME COLUMN name_fr TO nameFr;
ALTER TABLE map_locations RENAME COLUMN name_en TO nameEn;

ALTER TABLE map_locations RENAME COLUMN desc_fr TO descFr;
ALTER TABLE map_locations RENAME COLUMN desc_en TO descEn;

-- Down
