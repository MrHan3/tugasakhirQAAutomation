module.exports = {
    event : {
        event_dropdown: '//i[@class="bx bx-calendar"]',
        upcoming_event: '//a[@key="t-event-upcoming"]',
        hide_btn: '//div[@class="d-none d-sm-block d-md-none d-lg-block d-flex mb-3"]',
        add_event: '//div[@class="d-none d-sm-block d-md-none d-lg-block d-flex mb-3"]//a[@class="btn btn-primary w-md text-right"][normalize-space()="Tambah Event Baru"]',
        tipe_event: '//select[@id="fid_type"]',
        klien_kamu: '//select[@id="fid_company"]',
        lokasi: '//select[@id="fid_regencies"]',

        btn_next1: '//a[normalize-space()="Next"]',

        judul_event: '//input[@id="title"]',
        desc_event: '//textarea[@id="description"]',
        date_event: '//input[@id="event_date"]',
        time_event: '//input[@id="timepicker2"]',
        locat_event: '//input[@id="maps"]',
        venue: '//input[@id="venue_name"]',
        event_address: '//input[@id="location_address"]',
        yt_code: '//input[@id="event_video_url"]',
        event_address2: '//input[@id="location_coordinate_longitude"]',

        btn_next2: '//a[normalize-space()="Next"]',

        template: '//label[@class="layersMenu"]',
        templatecheck: '//input[@type="radio"]',
        btn_next3: '//a[normalize-space()="Next"]',

        confirm_btn_event: '//a[normalize-space()="Finish"]',

        locator_detail_event: '//*[@class="mb-sm-0 font-size-18"]'
        
    }
}