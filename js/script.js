const galleryColumn1 = document.getElementById('gallery-column-1');
const galleryColumn2 = document.getElementById('gallery-column-2');
const galleryColumn3 = document.getElementById('gallery-column-3');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const categories = document.querySelector('.categories');
const randomizeBtn = document.getElementById('randomizeBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const imageData = [
    { src: 'img/rajkapoor7_A_breathtaking_alien_landscape_with_two_suns_setting_111f669c-05b7-42de-8646-765f2dea4d4e (1).webp', categories: ['alien', 'landscape'], description: 'A breathtaking alien landscape with two suns setting.' },
    { src: 'img/rajkapoor7_A_tranquil_coastal_scene_with_rugged_cliffs_waves_cr_08ab36dc-080e-451b-afc1-1c418cb47748.webp', categories: ['coastal', 'cliffs'], description: 'A tranquil coastal scene with rugged cliffs and waves crashing below.' },
    { src: 'img/rajkapoor7_Japanese_illustration_Retro_illustration_Animation_e96b96fa-bef1-472e-88a3-83c90145f381_3.webp', categories: ['Japanese', 'retro'], description: 'Japanese illustration in retro style, animation still.' },
    { src: 'img/rajkapoor7_A_lush_forest_clearing_sunlight_filtering_through_de_96674d4f-02ea-4589-bf22-5f823f2a5ef2.webp', categories: ['nature', 'forest'], description: 'A lush forest clearing with sunlight filtering through dense trees.' },
    { src: 'img/rajkapoor7_A_retro_Japanese_mountain_shrine_illuminated_by_moon_aa33bbb2-18dd-48e3-a72f-05fb65911c9b.webp', categories: ['retro', 'Japanese'], description: 'A retro Japanese mountain shrine illuminated by moonlight.' },
    { src: 'img/rajkapoor7_A_frozen_planet_with_colossal_glaciers_a_dim_sun_bar_a5b33dc9-2782-459b-b729-6903a77e030d.webp', categories: ['alien', 'frozen'], description: 'A frozen planet with colossal glaciers and a dim sun barely visible.' },
    { src: 'img/rajkapoor7_A_retro_Japanese_train_traveling_through_a_glowing_cd2f29c2-cee1-4897-9911-d784cbc730a6_3.webp', categories: ['retro', 'train'], description: 'A retro Japanese train traveling through a glowing landscape.' },
    { src: 'img/rajkapoor7_A_dynamic_stormy_seascape_giant_waves_crashing_again_f52f4cef-1586-4f04-8bd3-303092d701ce.webp', categories: ['seascape', 'storm'], description: 'A dynamic stormy seascape with giant waves crashing against the shore.' },
    { src: 'img/rajkapoor7_Northern_lights_over_a_snowy_mountain_range_glowing__f9c93046-9d60-40c5-bf3c-7b8d1eb6ea1b.webp', categories: ['nature', 'northern lights'], description: 'Northern lights over a snowy mountain range.' },
    { src: 'img/rajkapoor7_A_crystal-clear_mountain_lake_submerged_rocks_visibl_83a0b2c4-8530-4b09-9923-e3fac05e6d0a.webp', categories: ['nature', 'lake'], description: 'A crystal-clear mountain lake with submerged rocks visible.' },
    { src: 'img/rajkapoor7_A_serene_mountain_landscape_a_crystal-clear_lake_ref_e60b7712-6894-47bb-9fc1-70e8b99c5e33.webp', categories: ['mountain', 'landscape'], description: 'A serene mountain landscape with a crystal-clear lake reflecting the peaks.' },
    { src: 'img/rajkapoor7_A_cyberpunk_cityscape_wallpaper_neon_lights_illumina_6cdc6191-63be-42c2-8c25-caf1e4a496f7 (1).webp', categories: ['cyberpunk', 'cityscape'], description: 'A cyberpunk cityscape wallpaper with neon lights illuminating the city.' },
    { src: 'img/rajkapoor7_A_serene_mountain_valley_in_summer_a_winding_river_r_85225c06-87d0-46be-8a6f-6031432cd53e.webp', categories: ['valley', 'summer'], description: 'A serene mountain valley in summer with a winding river running through.' },
    { src: 'img/rajkapoor7_A_high-resolution_depiction_of_a_futuristic_city_sky_ab3d4c89-ebd9-43eb-aa06-5872f48fa395.webp', categories: ['futuristic', 'city'], description: 'A high-resolution depiction of a futuristic city skyline.' },
    { src: 'img/rajkapoor7_A_serene_mountain_valley_in_summer_a_winding_river_r_30bfd052-6425-4712-9fd3-f687570f678a.webp', categories: ['valley', 'summer'], description: 'A serene mountain valley in summer with a winding river running through.' },
    { src: 'img/rajkapoor7_A_sleek_futuristic_spaceship_flying_through_a_vibr_a8a77e18-0c55-4030-b423-329d2ee18a84_0.webp', categories: ['futuristic', 'spaceship'], description: 'A sleek futuristic spaceship flying through a vibrant cosmic landscape.' },
    { src: 'img/rajkapoor7_A_breathtaking_alien_landscape_with_two_suns_setting_f3462def-3457-4e75-81ce-2120590eb01a (1).webp', categories: ['alien', 'landscape'], description: 'A breathtaking alien landscape with two suns setting.' },
    { src: 'img/rajkapoor7_Green_forest_--ar_169_--profile_y5zyxz5_--v_6.1_a8701d1f-098d-4e94-a71b-51990fbe8413.webp', categories: ['nature', 'forest'], description: 'A green forest with lush vegetation and sunlight filtering through.' },
    { src: 'img/rajkapoor7_A_sprawling_desert_landscape_with_rolling_golden_dun_2856ed4b-e161-496d-b110-17d587b2c688.webp', categories: ['desert', 'landscape'], description: 'A sprawling desert landscape with rolling golden dunes.' },
    { src: 'img/rajkapoor7_A_tranquil_beach_scene_at_sunset_gentle_waves_lapp_8bb1a124-8b87-40d8-94cd-eab6a40d1f1c_0.webp', categories: ['beach', 'sunset'], description: 'A tranquil beach scene at sunset with gentle waves lapping the shore.' },
    { src: 'img/rajkapoor7_A_sunflower_field_under_a_clear_blue_sky_vibrant_yel_69c8101b-9033-41b6-864b-631f52e08f2d.webp', categories: ['sunflower', 'field'], description: 'A sunflower field under a clear blue sky with vibrant yellow blooms.' },
    { src: 'img/rajkapoor7_Ukrainian_Cossack_with_a_rifle_in_Vladimir_Motsar__d84fe954-c85c-4af1-a077-1f05502695e9_0.webp', categories: ['historical', 'portrait'], description: 'A portrait of Ukrainian Cossack with a rifle by Vladimir Motsar.' },
    { src: 'img/rajkapoor7_Cat_Comics_Van_Gogh_High_Quality_and_High_Detail_--a_6eb3cd3c-88bc-4313-a798-2d3cba9bdf2f.webp', categories: ['comics', 'van Gogh'], description: 'Cat Comics in Van Gogh style, high quality and high detail.' },
    { src: 'img/rajkapoor7_A_serene_mountain_valley_in_summer_a_winding_river_r_69509191-b46a-40fd-9225-f218b9e3fcc6.webp', categories: ['valley', 'summer'], description: 'A serene mountain valley in summer with a winding river running through.' },
    { src: 'img/rajkapoor7_Japanese_illustration_Retro_illustration_Animation_s_dd6981ba-5e91-41f1-bcf1-32fbf3493170 (1).webp', categories: ['Japanese', 'illustration'], description: 'Retro Japanese illustration in animation style.' },
    { src: 'img/rajkapoor7_A_sprawling_alien_city_with_glowing_futuristic_tower_03ebf1bc-975d-4beb-8d9d-4eb50517f9a8.webp', categories: ['alien', 'city'], description: 'A sprawling alien city with glowing futuristic towers.' },
    { src: 'img/rajkapoor7_Wallpaper_--ar_45_--v_6.1_29f6daa2-e6c4-4439-9d3f-45081a5f718e_1.webp', categories: ['wallpaper', 'abstract'], description: 'Abstract wallpaper with vibrant colors.' },
    { src: 'img/rajkapoor7_Mount_Fuji_in_the_background_of_a_serene_Japanese_co_dfb68b5b-0d0b-4b69-9523-6b0380ed09ac.webp', categories: ['nature', 'Mount Fuji'], description: 'A serene Japanese countryside with Mount Fuji in the background.' },
    { src: 'img/rajkapoor7_Japanese_illustration_Retro_illustration_Animation_s_7a3f9ee0-01bc-4479-8a4f-f29f9e4ddf53.webp', categories: ['Japanese', 'illustration'], description: 'Japanese illustration in retro animation style.' },
    { src: 'img/rajkapoor7_A_serene_lake_on_an_alien_planet_with_towering_cliff_9215ea2e-b3fd-4449-b723-d5cf8336935a.webp', categories: ['alien', 'lake'], description: 'A serene lake on an alien planet with towering cliffs in the background.' },
    { src: 'img/rajkapoor7_Minimalist_style_a_simple_picture_of_the_sky_white_s_418ce476-9629-43ad-8b7e-9b3741755415.webp', categories: ['minimalist', 'sky'], description: 'A simple picture of the sky in minimalist style.' },
    { src: 'img/rajkapoor7_A_wide_valley_under_a_pristine_night_sky_filled_with_83431bf7-f712-4945-91ac-e05ee5c6d693.webp', categories: ['valley', 'night sky'], description: 'A wide valley under a pristine night sky filled with stars.' },
    { src: 'img/rajkapoor7_A_dense_rainforest_with_towering_trees_sunlight_filt_4e2872d1-4424-411d-8ddb-6f722eb473a3.webp', categories: ['nature', 'rainforest'], description: 'A dense rainforest with towering trees and sunlight filtering through the canopy.' },
    { src: 'img/rajkapoor7_An_enchanted_alien_forest_with_bioluminescent_plants_358f7526-52bd-46cf-a885-28f0b7c0ce4d (1).webp', categories: ['alien', 'forest'], description: 'An enchanted alien forest with bioluminescent plants.' },
    { src: 'img/rajkapoor7_Japanese_illustration_Retro_illustration_Animation_92935d22-60ca-4607-b4f8-6a6f0e1be179_3.webp', categories: ['Japanese', 'retro'], description: 'Japanese illustration in retro style, animation still.' },
    { src: 'img/rajkapoor7_A_snowy_mountain_valley_at_dawn_pristine_white_snow__df77242d-02a3-464b-afc5-4a1e9d1b399e.webp', categories: ['snowy', 'mountain'], description: 'A snowy mountain valley at dawn with pristine white snow.' },
    { src: 'img/rajkapoor7_A_glacial_world_with_sharp_ice_spires_frozen_caves_g_202e3cfe-46fd-4124-8168-3d7013d8ecaf (5).webp', categories: ['alien', 'ice'], description: 'A glacial world with sharp ice spires and frozen caves.' },
    { src: 'img/rajkapoor7_Aerial_view_of_the_iconic_Landwasser_Viaduct_trapped_b0c0b6ef-25b0-4e0b-90a0-7823d8042e7d.webp', categories: ['aerial', 'architecture'], description: 'Aerial view of the iconic Landwasser Viaduct.' },
    { src: 'img/rajkapoor7_A_quiet_forest_stream_with_crystal-clear_water_moss-_609cd861-fa48-4520-a81d-4b022c0b2f2a.webp', categories: ['nature', 'stream'], description: 'A quiet forest stream with crystal-clear water and moss-covered rocks.' },
    { src: 'img/rajkapoor7_A_minimalist_abstract_desktop_wallpaper_a_gradient_fc669b28-52c6-450a-b072-f10e4589a621_0.webp', categories: ['abstract', 'minimalist'], description: 'A minimalist abstract desktop wallpaper with a gradient.' },
    { src: 'img/rajkapoor7_A_serene_lake_on_an_alien_planet_with_towering_cliff_83418e8b-5497-40d1-9e17-5675134115d3.webp', categories: ['alien', 'lake'], description: 'A serene lake on an alien planet with towering cliffs in the background.' },
    { src: 'img/rajkapoor7_A_retro_Japanese_train_traveling_through_a_glowing_m_fee51db1-89cd-43d8-bdc0-79d0b3b48649.webp', categories: ['retro', 'train'], description: 'A retro Japanese train traveling through a glowing landscape.' },
    { src: 'img/rajkapoor7_A_sprawling_desert_landscape_with_rolling_golden_dun_0ed63d66-ff60-43c4-8203-ce0c998d587e.webp', categories: ['desert', 'landscape'], description: 'A sprawling desert landscape with rolling golden dunes.' },
    { src: 'img/rajkapoor7_A_photorealistic_scene_of_a_serene_mountain_lake_cry_ceaccafa-d738-480b-bc27-7d961b7e099e.webp', categories: ['nature', 'lake'], description: 'A photorealistic scene of a serene mountain lake with crystal-clear water.' },
    { src: 'img/rajkapoor7_A_rugged_coastal_cliffside_with_waves_crashing_again_215ac98c-81ba-45cd-b725-7fb8204fada7.webp', categories: ['coastal', 'cliffside'], description: 'A rugged coastal cliffside with waves crashing against the rocks.' },
    { src: 'img/rajkapoor7_A_snowy_mountain_valley_at_dawn_pristine_white_snow__d007bfd7-3a5f-405c-a470-74a6fd83f72d.webp', categories: ['snowy', 'mountain'], description: 'A snowy mountain valley at dawn with pristine white snow.' },
    { src: 'img/rajkapoor7_A_photorealistic_landscape_of_a_golden_wheat_field_a_eb7e709f-4cdb-4a00-a6d5-682f48beec2c.webp', categories: ['landscape', 'wheat field'], description: 'A photorealistic landscape of a golden wheat field at sunset.' },
    { src: 'img/rajkapoor7_A_picturesque_Mediterranean_seaside_village_pastel_7c8a7258-2a0e-4c8b-bd94-7652cf0b8c52_0.webp', categories: ['seaside', 'village'], description: 'A picturesque Mediterranean seaside village with pastel-colored houses.' },
    { src: 'img/rajkapoor7_A_photorealistic_landscape_of_a_golden_wheat_field_a_71239a32-a070-4602-9e10-fd52cc352ec0.webp', categories: ['landscape', 'wheat field'], description: 'A photorealistic landscape of a golden wheat field at sunset.' },
    { src: 'img/rajkapoor7_A_mysterious_planet_covered_in_frost-etched_canyons__35ddd7bb-6162-428a-92a2-72bf38f51763.webp', categories: ['mysterious', 'planet'], description: 'A mysterious planet covered in frost-etched canyons.' },
    { src: 'img/rajkapoor7_A_frosty_riverside_scene_the_river_partially_frozen__5a04c7d1-29e4-41df-a602-91fe3ea75124.webp', categories: ['winter', 'riverside'], description: 'A frosty riverside scene with the river partially frozen.' },
    { src: 'img/rajkapoor7_An_underwater_alien_landscape_with_glowing_futuristi_c463786c-6a3a-4ebf-8516-ac15afec829c.webp', categories: ['underwater', 'alien'], description: 'An underwater alien landscape with glowing futuristic elements.' },
    { src: 'img/rajkapoor7_An_underwater_alien_landscape_with_glowing_futuristi_2b7646c5-f669-4583-a672-4aeb728ecffc.webp', categories: ['underwater', 'alien'], description: 'An underwater alien landscape with glowing futuristic elements.' },
    { src: 'img/rajkapoor7_A_serene_desert_landscape_towering_sand_dunes_with_r_97c08c5a-0a44-4da4-9f52-c9f8a50d2a25.webp', categories: ['desert', 'landscape'], description: 'A serene desert landscape with towering sand dunes and rippling patterns.' },
    { src: 'img/rajkapoor7_Mount_Fuji_in_the_background_of_a_serene_Japanese_co_5578d44d-c86f-47c0-8b03-bd153f44f736.webp', categories: ['nature', 'Mount Fuji'], description: 'Mount Fuji in the background of a serene Japanese countryside.' },
    { src: 'img/rajkapoor7_An_abstract_digital_art_wallpaper_vibrant_geometric__9d53c400-ce3c-4094-a275-fd849a5377f2.webp', categories: ['abstract', 'digital art'], description: 'An abstract digital art wallpaper with vibrant geometric shapes.' },
    { src: 'img/rajkapoor7_A_serene_mountain_landscape_a_crystal-clear_lake_ref_313748a4-762a-4c4c-ab62-14ffa58f9f07.webp', categories: ['mountain', 'landscape'], description: 'A serene mountain landscape with a crystal-clear lake reflecting the peaks.' },
    { src: 'img/rajkapoor7_A_photorealistic_scene_of_a_serene_mountain_lake_cry_cace05e1-db26-4337-9fcd-34a4b2583961.webp', categories: ['nature', 'lake'], description: 'A photorealistic scene of a serene mountain lake with crystal-clear water.' },
    { src: 'img/rajkapoor7_A_tranquil_snowy_village_at_night_warm_lights_glowin_e40403f9-3de3-4708-93bb-79dfd1366c70.webp', categories: ['snowy', 'village'], description: 'A tranquil snowy village at night with warm lights glowing in the windows.' },
    { src: 'img/rajkapoor7_A_photorealistic_scene_of_a_serene_mountain_lake_cry_060a5768-c956-4f06-9b38-09999ca0835d.webp', categories: ['nature', 'lake'], description: 'A photorealistic scene of a serene mountain lake with crystal-clear water.' },
    { src: 'img/rajkapoor7_A_frozen_planet_with_colossal_glaciers_a_dim_sun_bar_31f300c1-5567-412c-adfa-604baae5cdb8.webp', categories: ['alien', 'frozen'], description: 'A frozen planet with colossal glaciers and a dim sun barely visible.' },
    { src: 'img/rajkapoor7_A_snowy_mountain_valley_at_dawn_pristine_white_snow__919a29c2-064a-4852-8741-f556f8ecd1a9.webp', categories: ['snowy', 'mountain'], description: 'A snowy mountain valley at dawn with pristine white snow.' },
    { src: 'img/rajkapoor7________--ar_169_--profile_y5zyxz5_--v_6.1_5f001ea9-2582-443c-a511-916544a1685e_3.webp', categories: ['abstract', 'profile'], description: 'Abstract profile image with vibrant colors.' },
    { src: 'img/rajkapoor7_A_rugged_coastal_cliffside_with_waves_crashing_again_f9fbf047-3282-4f67-830c-9d0c74771c21.webp', categories: ['coastal', 'cliffside'], description: 'A rugged coastal cliffside with waves crashing against the rocks.' },
    { src: 'img/rajkapoor7_A_majestic_desert_landscape_with_rolling_dunes_intri_3164baba-8a5c-4d8c-8f82-89bc70cc79f4.webp', categories: ['desert', 'landscape'], description: 'A majestic desert landscape with rolling dunes and intricate patterns.' },
    { src: 'img/rajkapoor7_A_retro_Japanese_mountain_shrine_illuminated_by_moon_39ec613d-5b72-4df3-aec2-060a185d2284.webp', categories: ['retro', 'Japanese'], description: 'A retro Japanese mountain shrine illuminated by moonlight.' },
    { src: 'img/rajkapoor7_An_anime-style_scene_of_a_rocket_launching_from_a_fl_4cfb6125-465c-4dba-98fd-358bb8759335.webp', categories: ['anime', 'space'], description: 'An anime-style scene of a rocket launching from a futuristic city.' },
    { src: 'img/rajkapoor7_A_breathtaking_alien_landscape_with_two_suns_setting_b99828ff-b54c-4d93-ac71-f2f51d65b42c (1).webp', categories: ['alien', 'landscape'], description: 'A breathtaking alien landscape with two suns setting.' },
    { src: 'img/rajkapoor7_A_photorealistic_landscape_of_a_golden_wheat_field_a_294b6003-e373-456b-9cad-4d6233be11d2.webp', categories: ['landscape', 'wheat field'], description: 'A photorealistic landscape of a golden wheat field at sunset.' },
    { src: 'img/rajkapoor7_A_surreal_wallpaper_of_a_cosmic_nebula_vibrant_blu_fe0c3faf-6f21-467f-ab15-676aa5bd61ad_0.webp', categories: ['surreal', 'cosmic'], description: 'A surreal wallpaper of a cosmic nebula with vibrant blue and purple hues.' },
    { src: 'img/rajkapoor7_A_whimsical_townscape_of_Gravity_Falls_at_sunset_the_713c37d9-961c-4a7d-8cc3-e6b86e2f1a14.webp', categories: ['whimsical', 'townscape'], description: 'A whimsical townscape of Gravity Falls at sunset with the sky ablaze.' },
    { src: 'img/rajkapoor7_Ukrainian_Cossack_with_a_rifle_in_Vladimir_Motsar_Ar_3dc5434b-8e46-4944-bb2a-d09bbd88a166.webp', categories: ['historical', 'portrait'], description: 'Ukrainian Cossack with a rifle in Vladimir Motsar artwork.' },
    { src: 'img/rajkapoor7_Ukrainian_Cossack_with_a_rifle_in_Vladimir_Motsar__d84fe954-c85c-4af1-a077-1f05502695e9_3.webp', categories: ['historical', 'portrait'], description: 'A historical portrait of Ukrainian Cossack with a rifle.' },
    { src: 'img/rajkapoor7_Towering_snow-capped_mountains_with_futuristic_orbit_5ee24c12-27b8-45bb-9e74-6647532b8426.webp', categories: ['nature', 'futuristic'], description: 'Towering snow-capped mountains with futuristic orbital structures.' },
    { src: 'img/rajkapoor7_A_girl_and_her_cat_sitting_on_a_rocky_beach_staring__84ebb60d-afa8-46da-8ce7-10297096f474.webp', categories: ['anime', 'beach'], description: 'A girl and her cat sitting on a rocky beach staring at the sunset.' },
    { src: 'img/rajkapoor7_A_crystal-clear_mountain_lake_submerged_rocks_visibl_ef87a3f4-3680-4f9c-887e-4c78bdeb86d7.webp', categories: ['nature', 'lake'], description: 'A crystal-clear mountain lake with submerged rocks visible.' },
    { src: 'img/rajkapoor7_A_tranquil_coastal_scene_with_rugged_cliffs_waves_cr_d0299458-c8e6-4a32-a835-fea238993fe1.webp', categories: ['coastal', 'cliffs'], description: 'A tranquil coastal scene with rugged cliffs and waves crashing below.' },
    { src: 'img/rajkapoor7_Abstract_cosmic_swirl_with_vibrant_nebula_colors_s_90c47c26-ccc3-4fe0-84e6-14e328471940_0.webp', categories: ['abstract', 'cosmic'], description: 'An abstract cosmic swirl with vibrant nebula colors.' },
    { src: 'img/rajkapoor7_A_serene_mountain_landscape_a_crystal-clear_lake_ref_94c7fa65-9193-448d-b530-ef67caa4193d.webp', categories: ['mountain', 'landscape'], description: 'A serene mountain landscape with a crystal-clear lake reflecting the peaks.' },
    { src: 'img/rajkapoor7_A_sleek_futuristic_spaceship_flying_through_a_vibran_e8e95bf0-88cc-43ed-8e40-828e5452e42b.webp', categories: ['futuristic', 'spaceship'], description: 'A sleek futuristic spaceship flying through a vibrant cosmic landscape.' },
    { src: 'img/rajkapoor7_A_cyberpunk_cityscape_wallpaper_neon_lights_illumina_6fe4dab8-54d6-4e02-8edc-dd8623be7947.webp', categories: ['cyberpunk', 'cityscape'], description: 'A cyberpunk cityscape wallpaper with neon lights illuminating the city.' },
    { src: 'img/rajkapoor7_A_serene_forest_clearing_bathed_in_sunlight_tall_anc_4c58def1-c5ff-4a9d-bc37-e5dab9aa5c20.webp', categories: ['forest', 'nature'], description: 'A serene forest clearing bathed in sunlight with tall ancient trees.' },
    // Add more image descriptions as needed
];

let imagesLoaded = 0;
const imagesPerLoad = 48;
let activeCategories = ['all'];
let searchTerm = '';

function loadImages() {
    const fragment1 = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();
    const fragment3 = document.createDocumentFragment();
    const filteredImages = imageData.filter(img =>
        (activeCategories.includes('all') || img.categories.some(category => activeCategories.includes(category))) &&
        img.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    for (let i = imagesLoaded; i < imagesLoaded + imagesPerLoad && i < filteredImages.length; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        const img = document.createElement('img');
        img.src = filteredImages[i].src;
        img.alt = filteredImages[i].description || `Image ${i + 1}`;
        img.loading = 'lazy';
        img.addEventListener('click', () => {
            const pngPath = filteredImages[i].src.replace('.webp', '.png');
            const categories = filteredImages[i].categories.join(',');
            window.location.href = `viewimage.html?src=${encodeURIComponent(filteredImages[i].src)}&download=${encodeURIComponent(pngPath)}&categories=${encodeURIComponent(categories)}&description=${encodeURIComponent(filteredImages[i].description)}`;
        });

        imgContainer.appendChild(img);

        if (i % 3 === 0) {
            fragment1.appendChild(imgContainer);
        } else if (i % 3 === 1) {
            fragment2.appendChild(imgContainer);
        } else {
            fragment3.appendChild(imgContainer);
        }
    }

    galleryColumn1.appendChild(fragment1);
    galleryColumn2.appendChild(fragment2);
    galleryColumn3.appendChild(fragment3);
    imagesLoaded += imagesPerLoad;

    if (imagesLoaded >= filteredImages.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function setActiveCategory(category) {
    if (category === 'all') {
        activeCategories = ['all'];
        document.querySelectorAll('.categories button').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`button[data-category="all"]`).classList.add('active');
    } else {
        const index = activeCategories.indexOf('all');
        if (index > -1) {
            activeCategories.splice(index, 1);
        }

        const categoryIndex = activeCategories.indexOf(category);
        if (categoryIndex > -1) {
            activeCategories.splice(categoryIndex, 1);
            document.querySelector(`button[data-category="${category}"]`).classList.remove('active');
        } else {
            activeCategories.push(category);
            document.querySelector(`button[data-category="${category}"]`).classList.add('active');
        }

        if (activeCategories.length === 0) {
            activeCategories = ['all'];
            document.querySelector(`button[data-category="all"]`).classList.add('active');
        } else {
            document.querySelector(`button[data-category="all"]`).classList.remove('active');
        }
    }

    imagesLoaded = 0;
    galleryColumn1.innerHTML = '';
    galleryColumn2.innerHTML = '';
    galleryColumn3.innerHTML = '';
    loadImages();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function performSearch() {
    searchTerm = searchInput.value.toLowerCase();
    imagesLoaded = 0;
    galleryColumn1.innerHTML = '';
    galleryColumn2.innerHTML = '';
    galleryColumn3.innerHTML = '';
    loadImages();
}

categories.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        setActiveCategory(event.target.getAttribute('data-category'));
    }
});

randomizeBtn.addEventListener('click', () => {
    imagesLoaded = 0;
    galleryColumn1.innerHTML = '';
    galleryColumn2.innerHTML = '';
    galleryColumn3.innerHTML = '';
    shuffleArray(imageData);
    loadImages();
});

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

loadImages();

loadMoreBtn.addEventListener('click', loadImages);

// Intersection Observer для автоматичного натискання кнопки "Load More"
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImages();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

observer.observe(loadMoreBtn);